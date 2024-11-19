import React, { useState } from 'react';
import { currentUser } from '../../../../core/CurrentUser';

export default function AvatarPicker() {
  const [avatarSeed, setAvatarSeed] = useState(''); // Seed selecionado
  const [previewUrl, setPreviewUrl] = useState(''); // URL para pré-visualizar o avatar selecionado

  const allowedSeeds = ['Mason', 'Kimberly', 'Avery', 'Alexander', 'Sara']; // Valores permitidos

  const handleSeedChange = (e) => {
    const seed = e.target.value;
    setAvatarSeed(seed);
    setPreviewUrl(`https://api.dicebear.com/9.x/miniavs/svg?seed=${seed}`);
    currentUser.avatarSet = seed
  };

  
  return (
    <div>
      <h2>Escolha seu Avatar</h2>
      <form style={{color:"##000000c0", fontFamily:"#"}}>
        <label>
          Escolha um avatar:
          <select
            value={avatarSeed}
            onChange={handleSeedChange}
            style={{ marginLeft: '10px', padding: '5px' }}
          >
            <option value="" disabled>
              Selecione...
            </option>
            {allowedSeeds.map((seed) => (
              <option key={seed} value={seed}>
                {seed}
              </option>
            ))}
          </select>
        </label>
        <div style={{ marginTop: '20px' }}>
          {previewUrl && (
            <>
              <h3>Pré-visualização:</h3>
              <img
                src={previewUrl}
                alt={`Avatar de ${avatarSeed}`}
                style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '5px', width:"64px" }}
              />
  
            </>
          )}
        </div>
      </form>
    </div>
  );
};

