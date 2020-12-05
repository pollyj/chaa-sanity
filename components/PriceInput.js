/* eslint-disable react/prop-types */
import React from 'react';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

function createPatchFrom(value) {
  // basically, check if user input is valid and set if so, unset if not
  // coerce input value to number because this is for a money value
  return PatchEvent.from(value === '' ? unset() : set(Number(value)));
}

const formatMoney = Intl.NumberFormat('ja-JA', {
  style: 'currency',
  currency: 'JPY',
}).format;

export default function PriceInput({ type, value, onChange, inputComponent }) {
  return (
    <>
      <h2>
        {type.title} - {value ? formatMoney(value) : ''}
      </h2>
      <p>{type.description}</p>
      <input
        type={type.name}
        value={value}
        onChange={(event) => onChange(createPatchFrom(event.target.value))}
        ref={inputComponent}
      />
    </>
  );
}

PriceInput.focus = function () {
  this._inputElement.focus();
};
