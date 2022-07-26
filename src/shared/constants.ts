export const Constants = {
    PASSWORD_REGEX_PATTERN: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
    NATIONAL_CODE_REGEX_PATTERN: /^[0-9]{10}$/,
    PHONE_NUMBER_REGEX_PATTERN: /^([\u06F0]|[0])([\u06F9]|[9])(([\u06F0-\u06F9]|[0-9]){2})(([\u06F0-\u06F9]|[0-9]){3})(([\u06F0-\u06F9]|[0-9]){4})/,
}