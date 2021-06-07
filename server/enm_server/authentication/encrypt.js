let all_characters_string_key = {};
let all_characters_int_key = {};
for (var i=32; i<127; i++){
    all_characters_string_key[String.fromCharCode(i)] = i-32;
    all_characters_int_key[`${i-32}`] = String.fromCharCode(i);
}

const encrypt = user => {
    console.log("starting...", user)
    const { email, password, timestamp } = user;
    
    return caesar_cipher(email, password, timestamp, all_characters_string_key, all_characters_int_key);
}

const caesar_cipher = (email, filled_password, timestamp, all_characters_string_key, all_characters_int_key) => {
    
    let counter_timestamp = Math.floor((timestamp/1000));
    let password_char_array = filled_password.split("");
    let encyrpted_password = "";
    for (let y = 0; y < password_char_array.length; y++) {
        
        let target_index = 
        ( all_characters_string_key[password_char_array[y]] + ( (counter_timestamp-y) + ((y%2==0? -1:1)*y * email.length ) )
        ) % Object.keys(all_characters_string_key).length;
        let mapped_character = all_characters_int_key[target_index]
        encyrpted_password+=mapped_character;

    }
    return encyrpted_password;

}

const filter_account = ({_id, email, first_name, last_name, tutor_ids, month_of_birth, year_of_birth}) => ({
    _id, email, first_name, last_name, tutor_ids, month_of_birth, year_of_birth
})

module.exports = { encrypt, filter_account };