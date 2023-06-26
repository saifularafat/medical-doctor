import { useQuery } from "@tanstack/react-query"
export const useService = () => {
    const { data: services = [], refetch } = useQuery({
        queryKey: ['service'],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/docServices`)
            return res.json();
        }
    })
    return [services, refetch]
}