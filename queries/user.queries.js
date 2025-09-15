const queries = {
    signUpUser: `
    INSERT INTO users (username, email, password)
    VALUES ($1, $2, $3)`,
    getUserByEmail: `
    SELECT * FROM users
    WHERE email = $1`,
    logIn: `
    UPDATE users
    SET logged = true
    WHERE email = $1
    RETURNING *`,
    logOut: `
    UPDATE users
    SET logged = false
    WHERE email = $1
    RETURNING *`
}

module.exports = queries;