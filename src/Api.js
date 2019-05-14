import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/'
})

export const loadGenres = () => api.get('genres')
export const saveSeries = (NewSeries) => api.post('series', NewSeries)
export const updateSeries = (series) => api.put('series/'+series.id, series)
export const loadSeriesByGenre = (genre) => api.get('series?genre='+genre)
export const deleteSerires = (id) => api.delete('series/'+id)
export const loadSeriesById= (id) => api.get('series/'+id)

const apis = {
    loadGenres,
    saveSeries,
    updateSeries,
    loadSeriesByGenre,
    deleteSerires,
    loadSeriesById
}

export default apis