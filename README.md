![](angular-ssn.gif)

# Social Security Number (SSN): Angular

The SSN functionality exhibits the following behavior:

  1. You can simply enter the SSN, dash insertion is taken care of.
  2. The field can be empty or it has to have the valid SSN format, invalid input will trigger validation.
  3. Only numeric values are allowed while typing, and pasting invalid input with alphabets and special characters (eg: 123ab$4), will result in trimming the alphabets and special characters, leaving behind only numbers in valid format (eg: 123–4).
