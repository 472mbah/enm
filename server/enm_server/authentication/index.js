
const express = require('express');
const router = express.Router();
const { encrypt, filter_account } = require('./encrypt');
const bcrypt = require('bcrypt');


let { MongoClient } = require('mongodb');
let url = "mongodb://localhost:27017/enmaths";

router.post('/authen', async (req, res, next) => {
  
    try {
        let response = await manage_authentication(req.body)
        res.send(response);
    }
    catch(err) {
        res.status(500).send(err)
    }
  
})



const manage_authentication = async ({user, collection="students", type=0}) => {

    // 10 is the salting rounds
    
    

    let error_message = { success:false, message:"Operation not possible" }


    let output = undefined;
    const client = new MongoClient(url, { useUnifiedTopology: true });

    try {
        await client.connect();

        let existing_accounts = await find_account_by_email(user, collection, client);

        switch (type){
            case 0:
                await bcrypt.hash(user.password, 10).then(hash=> user.password = hash ).catch(err=>{throw err});
                if (existing_accounts.length==0) {
                    let { ops } = await signup_account_(user, collection, client);
                    return {success:true, message:"Account registered...", user:filter_account(ops[0])};
                }
                else return {success:false, message:`Account with email:${user.email} already exist`}
            
            case 1:
                if (existing_accounts.length==1) {
                    let account = existing_accounts[0]
                    user.password = encrypt({email:user.email, password:user.password, timestamp:account.timestamp}); 
                    const match = await bcrypt.compare(user.password, account.password);    
                    
                    if (match) return {success:true, message:"Signing in...", user:filter_account(account)};
                    else return {success:false, message:`Incorrect details`}
                }
                else return {success:false, message:`Account with email:${user.email} does not exist`}
            
        }
            
        

    } catch (err) {
        return error_message;
    } 

    finally {
    await client.close();
    }

    return output;

}

const signup_account_ = async (user_object, collection, client) =>
    await client.db("enmaths").collection(collection).insertOne(user_object).then(res=>{return res})

const find_account_by_email = async (user_object, collection, client) => 
    await client.db("enmaths").collection(collection).find({ email: user_object.email }).toArray();



module.exports = router;
