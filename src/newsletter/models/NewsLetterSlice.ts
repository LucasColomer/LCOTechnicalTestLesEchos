import { createSlice } from "@reduxjs/toolkit";
import { MockNewsLetters } from "./MockNewsLetters";
import { NewsLetter } from "./NewsLetter";

interface NewsLetterState {
    newsLetters: NewsLetter[];
}

const initialState: NewsLetterState = {
    newsLetters: MockNewsLetters,
};

const newsLetterSlice = createSlice({
    name: "newsLetter",
    initialState,
    reducers: {
        setNewsLetters: (state, action) => {
            state.newsLetters = action.payload;
        },
    },
    selectors: {
        getNewsLetters: (state) => state.newsLetters,
        getNewsLettersBySite: (state) => {
            return state.newsLetters.reduce((acc, newsLetter) => {
                if (!acc[newsLetter.site]) {
                    acc[newsLetter.site] = [];
                }
                acc[newsLetter.site].push(newsLetter);
                return acc;
            }, {} as Record<string, NewsLetter[]>);
        }
    },
});

export const { setNewsLetters } = newsLetterSlice.actions;

export const { getNewsLetters, getNewsLettersBySite } = newsLetterSlice.selectors;

export default newsLetterSlice.reducer;
