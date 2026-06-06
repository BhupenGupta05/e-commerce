//Query Client is the central cache used by react query
import { QueryClient } from "@tanstack/react-query";

// REQUEST -> SERVER
// DATA CACHED

// User visits within 60 sec

// DATA COMES FROM CACHE
// NO NETWORK REQUEST
function makeQueryClient() {
    return new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 60 * 1000,
            }
        }
    })
}

// APPLICATION 
//     |- ONE QUERY CLIENT
//              |- CACHE

// One cache per client

let browserQueryClient: QueryClient | undefined = undefined;

// Create new QueryClient on overy server request
// Why? If more than one user requested page, and the queryClient is same, then that cache could leak data between users.

// User A requests page
// User B requests page


// Shared Cache
// ├── User A data
// └── User B data



// Request A
//  └── QueryClient A

// Request B
//  └── QueryClient B


// Window object is undefined on server
export function getQueryClient() {
    if(typeof window === 'undefined') {
        return makeQueryClient();
    }
    if(!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
}