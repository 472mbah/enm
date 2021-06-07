import { student_schema, parent_schema, tutor_schema } from './schema';
import axios from 'axios';
// import signup_account from '../mongodb/authentication';


/**
 * Fills password up until 50 characters, if necessary
 * 
 *
 * @password of the user (string)
 * @return Filled @password of the user
 */
const salting = (password) => {
    
    let length = password.length;
    let remainder_length = 50 - length;

    if (remainder_length==0) return password;

    let duplicates = 50/length;

    let filled_password = "";

    for (let x = 0; x < duplicates; x++) {
        filled_password+=password;
    }

    let remainding_characters = 50%length;
    let password_character_format = password.split("");

    for ( let x = 0; x < remainding_characters; x++ ) {
        filled_password += password_character_format[x];
    }

    return filled_password;

}

/**
 * Encrypts password using caesar cipher
 * 
 *
 * @filled_password of the user processed by salting (string)
 * @timestamp of when the user presses submit button (integer)
 * @all_characters_string_key Hashmap object - All ASCII printable characters ({ })
 * @all_characters_int_key Hashmap object - All ASCII printable characters ({ })
 * @return encyrpted version of password
 */

const caesar_cipher = (email, filled_password, timestamp, all_characters_string_key, all_characters_int_key) => {
    
    let counter_timestamp = Math.floor((timestamp/1000));
    let password_char_array = filled_password.split("");
    let encyrpted_password = "";

    for (let y = 0; y < password_char_array.length; y++) {
        
        let target_index = 
        
        (all_characters_string_key[password_char_array[y]] + ( (counter_timestamp-y) + ((y%2==0? -1:1)*y * email.length ) )
        ) % Object.keys(all_characters_string_key).length;

        let mapped_character = all_characters_int_key[target_index]
        encyrpted_password+=mapped_character;

    }

    return encyrpted_password;

}
//472AllahIsMyLord
//03*=`hQd5o5u0kR`
//gjat8@)<lGlMgC*8
//"%{/RZCV'a'g"]DR
//7:1DgoXk<v<|7rYg
/**
 * Handles authentication component.
 *
 * @email  of the user (string)
 * @password  of the user (string)
 * @timestamp  of when the user presses submit button (integer)
 * @return object - If successful authentication, returns user details, else returns error details.
 */

export default async (email, password, timestamp) => {

    let all_characters_string_key = {};
    let all_characters_int_key = {};
    for (var i=32; i<127; i++){
        all_characters_string_key[String.fromCharCode(i)] = i-32;
        all_characters_int_key[`${i-32}`] = String.fromCharCode(i);
    }


    let caesar_password = timestamp==-1 ?  password : caesar_cipher(email, password, timestamp, all_characters_string_key, all_characters_int_key);
    let user = student_schema(email, caesar_password, timestamp, "", "");
    let response = await axios({method:"post", 
                                url:'https://ENMSERVER.momodoubah1.repl.co/authentication/authen', 
                                data:{user, collection:"students", type:timestamp==-1 ? 1:0}})
                                .then(res=>(res.data))
                                .catch((err)=>({ success:false, message:"Network error" }));
    
    return response;

}
