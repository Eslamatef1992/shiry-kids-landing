import { useEffect, useState } from 'react';
import api from '../api/axios';

/**
 * useLanding — fetches the combined landing page content
 * ({ sections: { hero, about, ... }, items: { how_to_use: [...], partners: [...] } })
 */
export default function useLanding() {
  const [data, setData] = useState({ sections: {}, items: {} });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    api.get('/landing')
      .then(r => { if (mounted) setData(r.data.data || { sections: {}, items: {} }); })
      .catch(() => {})
      .finally(() => { if (mounted) setLoading(false); });
    return () => { mounted = false; };
  }, []);

  return { ...data, loading };
}
