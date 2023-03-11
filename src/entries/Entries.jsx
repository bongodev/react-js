import { useEffect, useState } from 'react';

import './Entries.css';

export default function Entries() {
  const [isLoading, setIsLoading] = useState(false);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch('https://api.publicapis.org/entries');
        const data = await res.json();
        setEntries(data.entries.slice(0, 10));
      } catch (err) {
        alert('failed to load data');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading....</div>
  }

  return (
    <div className="etries">
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>
            <a href={entry.Link}>{entry.Description}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
