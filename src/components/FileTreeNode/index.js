import React, { useState, Component } from 'react';

import FileTree from '../FileTree';

import styles from './styles';

const FileTreeNode = props => {
  const [open, toggle] = useState(false);
  const { oid, type, name, path } = props;

  const folder = type === 'tree';
  const filepath = path ? path + '/' + name : name;

  return (
    <div key={oid} style={styles.container}>
      <button style={styles.content} onClick={() => toggle(!open)}>
        <div style={styles.text}>{name}</div>
      </button>
      <div style={styles.subtree}>
        {open && folder && <FileTree {...props} path={filepath} />}
      </div>
    </div>
  );
};

export default FileTreeNode;
