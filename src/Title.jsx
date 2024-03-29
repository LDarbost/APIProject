import React, { useEffect } from 'react';

function Title() {
    useEffect(() => {
        document.title = "WeatherAPI";
        
    }, []);

    
}

export default Title;