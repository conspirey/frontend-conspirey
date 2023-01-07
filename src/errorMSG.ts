//login/register 1 - usernames, 2 passwords, 3,4 - user/server related problems like dupe ip or failed encrypting pass
export default {
    register: {
        "1": {
            invalid_name: "Invalid name, must be 3-16 characters, a-z 0-9",
            name_exists: "Name is already in use",
        },
        "2": {
            invalid_pass: "Invalid password, must be 8-32 characters"
        },
        "3": {
            invalid_ip: "You can only have 1 account per ip",
        },
        "4": {
            invalid_id: "Server error: Failed to generate id",
            failed_account: "Server error: Failed to create account",
            account_exists: "Account already exists",
        },
        
       
        
    },
    login: {
        "1": {
            invalid_name: "Name is invalid or doesn't exist"
        },
        "2": {
            empty_password: "Password is empty",
            incorrect_password: "Password is incorrect"
        },
        "3": {},
        "4": {
            depcr_failed: "Server failed decrypting password"
        },
    }
}