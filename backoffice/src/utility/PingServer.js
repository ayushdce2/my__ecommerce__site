import React, { useEffect, useState } from 'react'

const PingServer =  () => {

    const [latency,setlatency] = useState(null);
    const [loadingserver,setloadingserver]=useState(true)

const Pinging =async (url)=>{
  const startTime = performance.now();
  try {
    const response = await fetch(url, {
      method: 'GET',
      mode: 'no-cors', // Use 'no-cors' for cross-origin requests to avoid CORS issues
      cache: 'no-cache'
    });
    const endTime = performance.now();
    const latencyCheck = endTime - startTime;
    setlatency(latencyCheck);
    setloadingserver(false);

    // Even with 'no-cors', you can still determine if the request completed
    // and estimate latency. The 'response.ok' property might not be accurate
    // with 'no-cors', but the fact that the fetch promise resolved indicates
    // the server responded.
    // console.log(`Successfully "pinged" ${url}. Latency: ${latencyCheck.toFixed(2)} ms`);
    return { success: true, latency: latencyCheck };

  } catch (error) {
    const endTime = performance.now();
    const latencyError = endTime - startTime; // Still useful to see how long it took to fail
    setlatency(latencyError);
    setloadingserver(true)
    console.error(`Failed to "ping" ${url}. Error: ${error.message}. Latency: ${latencyError.toFixed(2)} ms`);
    return { success: false, error: error.message, latency: latencyError };
  }
  }
useEffect(()=>{
    
Pinging(import.meta.env.VITE_API_URL);

},[])

return {latency,loadingserver}

}


export default PingServer

