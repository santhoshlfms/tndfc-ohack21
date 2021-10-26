const ERROR_MESSAGES: { [key: string]: string } = {
    "auth/email-already-in-use": "The email is already in use.",
    "auth/email-not-verified": "The email is not yet verified.",
    "auth/expired-action-code": "The action code is already expired.",
    "auth/invalid-action-code": "Invalid action code.",
    "auth/invalid-email": "Invalid email address.",
    "auth/user-disabled": "The user is already disabled.",
    "auth/user-not-found": "The user is not found.",
    "auth/weak-password": "The password is not strong enough.",
  };
  
  export default function authError(code: string): string {
    return ERROR_MESSAGES[code] ?? "Oops! Something went wrong.";
  }
  