export const signUpUser = async (username, email, password) => {
    try {
        const res = await fetch(`http://localhost:3000/api/users/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
            // credentials: 'include', // importante para cookies
        });
        if (!res.ok) {
            throw new Error('Error signing up new user');
        }
        const confirmation = res.json()
        return confirmation.message;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const login = async (email, password) => {
    try {
        const res = await fetch(`http://localhost:3000/api/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
            // credentials: 'include',
        });
        if (!res.ok) {
            throw new Error('Error loging in');
        }
    } catch (error) {
        throw new Error(error.message);
    }
};