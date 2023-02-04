import React from 'react';

interface ToggleProps {
checked: boolean;
onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Toggle: React.FC<ToggleProps> = ({ checked, onChange }) => (
<span className="toggle-control">
<input
   className="dmcheck"
   type="checkbox"
   checked={checked}
   onChange={onChange}
   id="dmcheck"
 />
<label htmlFor="dmcheck" />
</span>
);

export default Toggle;