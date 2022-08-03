export interface PostType {
    id: Number,
    name: String,
    email: String,
    phone: Number,
    country: null,
    gender: String,
    languages: Array<string>,
    selectedLanguage? : Array<string>
};