import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';


const SUPABASE_URL = 'https://eokrxaaekalivlanzciz.supabase.co'
const SUPABASEANONKEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVva3J4YWFla2FsaXZsYW56Y2l6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg4MTA0MjcsImV4cCI6MjAyNDM4NjQyN30.wgycemrSaPfgTo7nasI4rxVp_ejsbR7W0zYMK1ABaC4'

export const supabase = createClient(SUPABASE_URL, SUPABASEANONKEY, {
    auth: {
      storage: AsyncStorage ,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  });