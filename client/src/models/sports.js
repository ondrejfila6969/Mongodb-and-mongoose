export const getAllSports = async () => {
    const req = await fetch("http://localhost:3000/sports", {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        method: "GET"
    });
    const data = await req.json();
    return {
        status: req.status,
        message: data.message,
        payload: data.payload
    }
};

export const getSportById = async (id) => {
    const req = await fetch(`http://localhost:3000/sports/${id}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        method: "GET"
    });
    const data = await req.json();
    return {
        status: req.status,
        message: data.message,
        payload: data.payload
    }
};

export const createSport = async (formData) => {
    const req = await fetch(`http://localhost:3000/sports`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(formData)
    });
    const data = await req.json();
    return {
        status: req.status,
        message: data.message,
        payload: data.payload
    }
};

export const updateSport = async (id, formData) => {
    const req = await fetch(`http://localhost:3000/sports/${id}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(formData)
    });
    const data = await req.json();
    return {
        status: req.status,
        message: data.message,
        payload: data.payload
    }
};

export const deleteSport = async (id) => {
    const req = await fetch(`http://localhost:3000/sports/${id}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        method: "DELETE",
    });
    const data = await req.json();
    return {
        status: req.status,
        message: data.message,
        payload: data.payload
    }
};
