'use strict'

const BASE_URL = import.meta.env.VITE_API_URL || import.meta.env.API_URL || 'http://localhost:8000'
const API_BASE = `${BASE_URL}/api/v1/auth`

export const LOGIN_URL = `${API_BASE}/login`
export const LOGOUT_URL = `${API_BASE}/logout`
export const FORGOT_PASSWORD_URL = `${API_BASE}/forgot-password`
export const RESET_PASSWORD_URL = `${API_BASE}/reset-password`
