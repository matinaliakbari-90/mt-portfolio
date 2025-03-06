import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// 1. تعریف schema اعتبارسنجی با Yup
const schema = yup.object().shape({
    name: yup
        .string()
        .required('Name is required')
        .min(2, "The name must be at least 2 characters long"),
    email: yup
        .string()
        .required('Email is required')
        .email('Email format is invalid')
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'example: example@domain.com'),
    message: yup
        .string()
        .required('Message is required')
        .min(10, 'The message must be at least 10 characters long')
});


const ContactForm = () => {
    // 2. راه‌اندازی react-hook-form
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
        resolver: yupResolver(schema),
        mode: 'onTouched', // اعتبارسنجی هنگام لمس فیلد
        reValidateMode: 'onChange' // اعتبارسنجی مجدد هنگام تغییر
    });

    // 3. هندلر ارسال فرم
    const onSubmit = async (data) => {
        try {
            console.log('داده‌های فرم:', data);
            // شبیه‌سازی ارسال به سرور
            await new Promise(resolve => setTimeout(resolve, 2000));
            reset(); // ریست فرم پس از موفقیت
        } catch (error) {
            console.error('خطا در ارسال:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* 4. فیلد نام */}
            <div className="mb-4">
                <input {...register('name')} className={`w-full px-2 py-3 rounded-lg bg-lightBrown ${errors.name ? 'border-2 border-white' : ''}`} type="text" placeholder="Your Name" aria-invalid={!!errors.name} />
                {errors.name && (
                    <p className="mt-1 text-sm text-orange" role="alert">
                        {errors.name.message}
                    </p>
                )}
            </div>

            {/* 5. فیلد ایمیل */}
            <div className="mb-4">
                <input {...register('email')} className={`w-full px-2 py-3 rounded-lg bg-lightBrown ${errors.email ? 'border-2 border-white' : ''}`} type="email" placeholder="Your Email" aria-invalid={!!errors.email} />
                {errors.email && (
                    <p className="mt-1 text-sm text-orange" role="alert">
                        {errors.email.message}
                    </p>
                )}
            </div>

            {/* 6. فیلد پیام */}
            <div className="mb-4">
                <textarea {...register('message')} className={`w-full px-2 py-3 rounded-lg bg-lightBrown ${errors.message ? 'border-2 border-white' : ''}`} rows="8" placeholder="Message" aria-invalid={!!errors.message}></textarea>
                {errors.message && (
                    <p className="mt-1 text-sm text-orange" role="alert">
                        {errors.message.message}
                    </p>
                )}
            </div>

            {/* 7. دکمه ارسال */}
            <div>
                <button type="submit" disabled={isSubmitting} className={`w-full p-2 text-xl font-bold text-white transition duration-500 rounded-lg ${isSubmitting ? 'bg-lightBrown cursor-not-allowed' : 'bg-cyan hover:bg-cyan/50'}`}>
                    {isSubmitting ? 'Sending...' : 'Send'}
                </button>
            </div>
        </form>
    );
};

export default ContactForm;