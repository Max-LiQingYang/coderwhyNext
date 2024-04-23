import React from 'react';
import { useState } from 'react';
import { Link, useRouters } from 'react-router-dom';
import routes from './router/index';

const App = function() {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <h2>APP</h2>
            <div>{counter}</div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <Link to="/">home</Link>
            <Link to="/about">about</Link>

            {/* 页面的占位 */}
            {useRouters(routes)}
        </div>
    );
}

export default App;
