export default defineNuxtPlugin(() => {
    const validatePhoneNumber = (event) => {
      const input = event.target.value;
  
      // جلوگیری از تایپ فارسی
      const isPersian = /[\u0600-\u06FF]/.test(input);
      if (isPersian) {
        event.target.value = input.replace(/[\u0600-\u06FF]/g, ''); // حذف حروف فارسی
        return;
      }
  
      // فقط اعداد اجازه داده شود
      const onlyNumbers = input.replace(/\D/g, '');
      if (input !== onlyNumbers) {
        event.target.value = onlyNumbers;
      }
  
      // جلوگیری از وارد کردن بیش از 11 رقم
      if (onlyNumbers.length > 11) {
        event.target.value = onlyNumbers.slice(0, 11);
      }
  
      // شماره باید با صفر شروع شود
      if (onlyNumbers.length > 0 && onlyNumbers[0] !== '0') {
        event.target.value = '0' + onlyNumbers.slice(0, 10);
      }
    };


    const validateString = (event) => {
        const input = event.target.value;
    
        // جلوگیری از تایپ اعداد
        const noNumbers = input.replace(/[0-9]/g, '');
        if (input !== noNumbers) {
          event.target.value = noNumbers;
        }
    };
  
    return {
      provide: {
        validatePhoneNumber,
        validateString
      }
    };
  });
  