import supabase from '../SupabaseClient'

const saveFavoriteToDatabase = async (favorites) => {
    
    try {
      const { data, error } = await supabase.from('favorites').insert([favorites]);
      if (error) {
        console.error('Error saving to database:', error);
      } else {
        console.log('Favorite saved successfully:', data);
      }
    } catch (error) {
      console.error('Error saving to database:', error);
    }
  };

export default saveFavoriteToDatabase