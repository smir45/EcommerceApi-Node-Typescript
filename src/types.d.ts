export type UserRole = 'admin' | 'general' | 'vendor'

export interface UserResponse {
    id: number;
}
export interface payload {
    userID: number;
    iat: number;
    exp: number;
}