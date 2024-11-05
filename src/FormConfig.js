// FormConfig.js
import * as Yup from 'yup';

export const formConfig = [
  {
    name: 'firstName',
    label: 'First Name',
    type: 'input',
    initialValue: '',
    validation: [
      { rule: Yup.string().required('First name is required') },
      { rule: Yup.string().min(2, 'Must be at least 2 characters') },
    ],
    cssClass: 'form-field first-name',
    props: { placeholder: 'Enter your first name' },
  },
  {
    name: 'lastName',
    label: 'Last Name',
    type: 'input',
    initialValue: '',
    validation: [
      { rule: Yup.string().required('Last name is required') },
      { rule: Yup.string().min(2, 'Must be at least 2 characters') },
    ],
    cssClass: 'form-field last-name',
    props: { placeholder: 'Enter your last name' },
  },
  {
    name: 'email',
    label: 'Email',
    type: 'input',
    initialValue: '',
    validation: [
      { rule: Yup.string().email('Invalid email format') },
      { rule: Yup.string().required('Email is required') },
    ],
    cssClass: 'form-field email',
    props: { placeholder: 'Enter your email' },
  },
  {
    name: 'password',
    label: 'Password',
    type: 'input',
    initialValue: '',
    validation: [
      { rule: Yup.string().required('Password is required') },
      { rule: Yup.string().min(6, 'Must be at least 6 characters') },
    ],
    cssClass: 'form-field password',
    props: { type: 'password', placeholder: 'Enter your password' },
  },
  {
    name: 'age',
    label: 'Age',
    type: 'input',
    initialValue: '',
    validation: [
      { rule: Yup.number().required('Age is required') },
      { rule: Yup.number().min(18, 'Must be at least 18') },
    ],
    cssClass: 'form-field age',
    props: { type: 'number', placeholder: 'Enter your age' },
  },
  {
    name: 'gender',
    label: 'Gender',
    type: 'select',
    initialValue: '',
    validation: [{ rule: Yup.string().required('Gender is required') }],
    cssClass: 'form-field gender',
    props: {
      as: 'select',
      children: (
        <>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </>
      ),
    },
  },
  {
    name: 'dob',
    label: 'Date of Birth',
    type: 'input',
    initialValue: '',
    validation: [{ rule: Yup.date().required('Date of birth is required') }],
    cssClass: 'form-field dob',
    props: { type: 'date' },
  },
  {
    name: 'phone',
    label: 'Phone Number',
    type: 'input',
    initialValue: '',
    validation: [
      { rule: Yup.string().required('Phone number is required') },
      { rule: Yup.string().matches(/^[0-9]{10}$/, 'Must be a 10-digit number') },
    ],
    cssClass: 'form-field phone',
    props: { placeholder: 'Enter your phone number' },
  },
  {
    name: 'address',
    label: 'Address',
    type: 'textarea',
    initialValue: '',
    validation: [{ rule: Yup.string().required('Address is required') }],
    cssClass: 'form-field address',
    props: { placeholder: 'Enter your address', rows: 3 },
  },
  {
    name: 'city',
    label: 'City',
    type: 'input',
    initialValue: '',
    validation: [{ rule: Yup.string().required('City is required') }],
    cssClass: 'form-field city',
    props: { placeholder: 'Enter your city' },
  },
  {
    name: 'state',
    label: 'State',
    type: 'input',
    initialValue: '',
    validation: [{ rule: Yup.string().required('State is required') }],
    cssClass: 'form-field state',
    props: { placeholder: 'Enter your state' },
  },
  {
    name: 'zipCode',
    label: 'Zip Code',
    type: 'input',
    initialValue: '',
    validation: [
      { rule: Yup.string().required('Zip code is required') },
      { rule: Yup.string().matches(/^[0-9]{5}$/, 'Must be a 5-digit number') },
    ],
    cssClass: 'form-field zip-code',
    props: { placeholder: 'Enter your zip code' },
  },
  {
    name: 'employmentStatus',
    label: 'Employment Status',
    type: 'select',
    initialValue: '',
    validation: [{ rule: Yup.string().required('Employment status is required') }],
    cssClass: 'form-field employment-status',
    props: {
      as: 'select',
      children: (
        <>
          <option value="">Select Employment Status</option>
          <option value="employed">Employed</option>
          <option value="unemployed">Unemployed</option>
          <option value="student">Student</option>
        </>
      ),
    },
  },
  {
    name: 'terms',
    label: 'Agree to Terms',
    type: 'checkbox',
    initialValue: false,
    validation: [{ rule: Yup.boolean().oneOf([true], 'Must accept terms') }],
    cssClass: 'form-field terms',
    props: {},
  },
  {
    name: 'newsletter',
    label: 'Subscribe to Newsletter',
    type: 'checkbox',
    initialValue: false,
    validation: [],
    cssClass: 'form-field newsletter',
    props: {},
  },
];
