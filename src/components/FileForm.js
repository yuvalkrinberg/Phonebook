import React from 'react';

const FileForm = (props) => {
  const { newName, newPhone, handleNewName, handleNewPhone, addName } = props;
  return (
    <form>
      <div>
        name: <input
          value={newName}
          onChange={handleNewName}
        />
      </div>
      <div>
        phone number: <input
          value={newPhone}
          onChange={handleNewPhone}
        />
      </div>
      <div>
        <button type="submit" onClick={addName}>add</button>
      </div>
    </form>
  );
};

export default FileForm;
