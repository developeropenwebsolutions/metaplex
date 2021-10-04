import React from 'react';

export const IndexView = () => {
  return (
    <div>
        <input
            className="fr-form-control"
            type="text"
            name="your realm"
            id="realm"
            placeholder="Find your kin. Enter the realm."
        />
        <button className="fr-form-btn" type="submit">Watch cinematic</button>
    </div>
  );
};
