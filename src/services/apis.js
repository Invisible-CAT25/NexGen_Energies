// const BASE_URL = process.env.REACT_APP_BASE_URL
const BASE_URL = "http://localhost:4000/api/v1"

// Auth Endpoints
export const endpoints = {
    LOGIN_API: BASE_URL + "/admin/login",
    RESETPASSTOKEN_API: BASE_URL + "/admin/reset-password-token",
    RESETPASSWORD_API: BASE_URL + "/admin/reset-password"
}

export const awardEndpoints = {
    CREATE_AWARD_API: BASE_URL + "/award/createAward",
    UPDATE_AWARD_API: BASE_URL + "/award/updateAward",
    DELETE_AWARD_API: BASE_URL + "/award/deleteAward",
    GET_ALL_AWARD_API: BASE_URL + "/award/getAllAward",
}

export const blogEndpoints = {
    CREATE_BLOG_API: BASE_URL + "/award/createBlog",
    UPDATE_BLOG_API: BASE_URL + "/award/updateBlog",
    DELETE_BLOG_API: BASE_URL + "/award/deleteBlog",
    GET_ALL_BLOG_API: BASE_URL + "/award/getAllBlogs",
}

export const clientEndpoints = {
    CREATE_CLIENT_API: BASE_URL + "/award/createClient",
    UPDATE_CLIENT_API: BASE_URL + "/award/updateClient",
    DELETE_CLIENT_API: BASE_URL + "/award/deleteClient",
    GET_ALL_CLIENT_API: BASE_URL + "/award/getAllClients",
}

export const csrEndpoints = {
    CREATE_CSR_API: BASE_URL + "/award/createCSR",
    UPDATE_CSR_API: BASE_URL + "/award/updateCSR",
    DELETE_CSR_API: BASE_URL + "/award/deleteCSR",
    GET_ALL_CSR_API: BASE_URL + "/award/getAllCSR",
}

export const cultureEndpoints = {
    CREATE_CULTURE_API: BASE_URL + "/award/createCulture",
    UPDATE_CULTURE_API: BASE_URL + "/award/updateCulture",
    DELETE_CULTURE_API: BASE_URL + "/award/deleteCulture",
    GET_ALL_CULTURE_API: BASE_URL + "/award/getAllCultures",
}

export const leadershipEndpoints = {
    CREATE_LEADERSHIP_API: BASE_URL + "/award/createLeadership",
    UPDATE_LEADERSHIP_API: BASE_URL + "/award/updateLeadership",
    DELETE_LEADERSHIP_API: BASE_URL + "/award/deleteLeadership",
    GET_ALL_LEADERSHIP_API: BASE_URL + "/award/getAllLeaderships",
}

export const contactusEndpoint = {
    CONTACT_US_API: BASE_URL + "/contact"
}

// SETTINGS PAGE API
export const settingsEndpoints = {
    UPDATE_PROFILE_API: BASE_URL + "/profile/updateProfile",
    CHANGE_PASSWORD_API: BASE_URL + "/admin/changepassword",
}