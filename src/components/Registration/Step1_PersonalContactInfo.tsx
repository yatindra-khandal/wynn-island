import { useState } from 'react';
import { useRegistration } from '../../hooks/useRegistration';
import TextInput from '../ui/TextInput';
import SelectInput from '../ui/SelectInput';
import CheckboxInput from '../ui/CheckBoxInput';
import { registrationSchema } from './validationSchema';

const Step1_PersonalContactInfo = () => {
  const { state, dispatch } = useRegistration();
  const { form } = state;
  const [errors, setErrors] = useState<Partial<Record<keyof typeof form, string[]>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const targetElement = e.target as HTMLInputElement;

    dispatch({
      type: 'UPDATE_FIELD',
      payload: {
        field: name as keyof typeof form,
        value: type === 'checkbox' ? targetElement.checked : value,
      },
    });
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();

    const result = registrationSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors(fieldErrors);
      return;
    }

    dispatch({ type: 'NEXT_STEP' });
  };

  return (
    <form onSubmit={handleNext}>
      <div>
        <h3 className="font-big-calson text-[22px] mb-4 text-[#1D1F22]">Personal Info</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TextInput
            label="First Name"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="First Name"
            error={errors.firstName?.[0]}
            tooltip="Please enter your legal first name"
          />
          <TextInput
            label="Last Name"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            error={errors.lastName?.[0]}
            tooltip="Please enter your legal last name"
          />
          <SelectInput
            label="Gender"
            name="gender"
            value={form.gender}
            onChange={handleChange}
            options={[
              { value: 'male', label: 'Male' },
              { value: 'female', label: 'Female' },
              { value: 'other', label: 'Other' },
            ]}
            error={errors.gender?.[0]}
            tooltip="Select your gender"
          />
          <SelectInput
            label="Country"
            name="country"
            value={form.country}
            onChange={handleChange}
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

      <div>
        <h3 className="font-big-calson text-[22px] mb-4 text-[#1D1F22]">Contact Details</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TextInput
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
            error={errors.email?.[0]}
            tooltip="Enter a valid email address"
          />
          <TextInput
            label="Phone Number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            type="tel"
            placeholder="Phone Number"
            error={errors.phone?.[0]}
            tooltip="Enter your phone number including country code"
          />
        </div>
      </div>

      <CheckboxInput
        label="I agree to the Terms & Conditions"
        name="termsAccepted"
        checked={form.termsAccepted}
        onChange={handleChange}
        error={errors.termsAccepted?.[0]}
        tooltip="You must accept the terms and conditions to proceed"
      />

      <div className="text-right">
        <button type="submit" className="bg-black text-white px-6 py-2 rounded">
          Next
        </button>
      </div>
    </form>
  );
};

export default Step1_PersonalContactInfo;
