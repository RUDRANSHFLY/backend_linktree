import { validateEmail } from "./validateEmail";

describe('Validate Email', () => {
    test('should return true for valid email formats', () => {
        expect(validateEmail('test@example.com')).toBe(true)
        expect(validateEmail('test@example.com')).toBe(true);
        expect(validateEmail('user@domain.co.uk')).toBe(true)
        expect(validateEmail('user@sub.domain.com')).toBe(true)
        expect(validateEmail('user+name@domain.com')).toBe(true)
    });
    
    test('should return flase for invalid email formats', () => {
        expect(validateEmail('invalid-email')).toBe(false);
        expect(validateEmail('user@.com')).toBe(false);
        expect(validateEmail('user@domain.')).toBe(false);
        expect(validateEmail('user@domain,com')).toBe(false);
        expect(validateEmail('user@domain.com ')).toBe(false); 
        expect(validateEmail('user@domain.com\n')).toBe(false); 
    });
});