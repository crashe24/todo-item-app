import React from 'react';

const TodoHeaderComponent = ({children, loading}) => {

  
  return (
    <header>
      {
        React.Children
        .toArray(children).map(child => React.cloneElement(child, {loading}))
      }
        
    </header>
  );
}

export { TodoHeaderComponent} ;
