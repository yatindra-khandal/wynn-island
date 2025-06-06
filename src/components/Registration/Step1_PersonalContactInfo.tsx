import { useState } from 'react';
import { useRegistration } from '../../hooks/useRegistration';
import TextInput from '../ui/TextInput';
import SelectInput from '../ui/SelectInput';
import CheckboxInput from '../ui/CheckBoxInput';
import { registrationSchema } from './validationSchema';
import PhoneInput from '../ui/PhoneInput';
import Button from '../ui/Button';
import SectionTitle from '../ui/SectionTitle';
import { submitRegistration } from '../../services/registrationService';

const Step1_PersonalContactInfo = () => {
  const { state, dispatch } = useRegistration();
  const { form } = state;
  const [errors, setErrors] = useState<Partial<Record<keyof typeof form, string[]>>>({});
  const [apiError, setApiError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target;
    const { name, value, type } = target;

    const field = name as keyof typeof form;

    let fieldValue: string | boolean;
    if (type === 'checkbox' && 'checked' in target) {
      fieldValue = (target as HTMLInputElement).checked;
    } else {
      fieldValue = value;
    }

    dispatch({
      type: 'UPDATE_FIELD',
      payload: {
        field,
        value: fieldValue,
      },
    });

    const fieldSchema = registrationSchema.pick({ [field]: true });
    const result = fieldSchema.safeParse({ [field]: fieldValue });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: result.success ? [] : (result.error.flatten().fieldErrors[field] ?? []),
    }));
  };

  const handleNext = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const result = registrationSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors(fieldErrors);
      setLoading(false);
      return;
    }

    const response = await submitRegistration(form);

    if (!response.success) {
      setApiError(response.error ?? 'Registration failed.');
      setLoading(false);
      return;
    }

    dispatch({ type: 'NEXT_STEP' });
    setLoading(false);
  };

  return (
    <form onSubmit={handleNext}>
      <SectionTitle title="Personal Info" />
      <div className="flex flex-col gap-5 pb-8 pt-5">
        <div className="grid grid-cols-1 gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <TextInput
              label="first name *"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="First Name"
              error={errors.firstName?.[0]}
              tooltip="Please enter your legal first name"
            />
            <TextInput
              label="last name *"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              error={errors.lastName?.[0]}
              tooltip="Please enter your legal last name"
            />
          </div>
          <div className="col-span-full">
            <SelectInput
              label="Gender *"
              name="gender"
              value={form.gender}
              onChange={handleChange}
              placeholder="Select gender..."
              options={[
                { value: 'male', label: 'Male' },
                { value: 'female', label: 'Female' },
                { value: 'other', label: 'Other' },
              ]}
              error={errors.gender?.[0]}
              tooltip="Select your gender"
            />
          </div>
          <div className="col-span-full">
            <SelectInput
              label="your residance country *"
              name="country"
              value={form.country}
              onChange={handleChange}
              placeholder="Select residence country..."
              options={[
                { value: 'us', label: 'United States' },
                { value: 'uk', label: 'United Kingdom' },
                { value: 'in', label: 'India' },
              ]}
              error={errors.country?.[0]}
              tooltip="Select your country of residence"
            />
          </div>
        </div>
      </div>

      <SectionTitle title="Contact Details" />
      <div className="flex flex-col gap-5 pb-8 pt-5">
        <div className="grid grid-cols-1 gap-6">
          <div className="col-span-full">
            <TextInput
              label="email *"
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
              error={errors.email?.[0]}
              tooltip="Enter a valid email address"
            />
          </div>
          <div className="col-span-full">
            <PhoneInput
              label="phone number *"
              name="phone"
              value={form.phone}
              placeholder="+971 (__)-_______"
              onChange={handleChange}
              error={errors.phone?.[0]}
              tooltip="Enter a valid Phone Number"
            />
          </div>
        </div>
      </div>

      <CheckboxInput
        label={
          <>
            I agree to the{' '}
            <a href="/#terms" target="_blank" rel="noopener noreferrer" className="underline">
              terms & conditions
            </a>{' '}
            and{' '}
            <a href="/#privacy" target="_blank" rel="noopener noreferrer" className="underline">
              privacy policy
            </a>
          </>
        }
        name="termsAccepted"
        checked={form.termsAccepted}
        onChange={handleChange}
        error={errors.termsAccepted?.[0]}
        tooltip="You must accept the terms and conditions to proceed"
      />

      {apiError && <p className="text-sm text-red-600 mt-4">{apiError}</p>}

      <Button
        variant="primary"
        label={loading ? 'Loading...' : 'NEXT'}
        className="w-[217px] mt-10 cursor-pointer"
        type="submit"
        disabled={loading}
        aria-busy={loading}
      />
    </form>
  );
};

export default Step1_PersonalContactInfo;
