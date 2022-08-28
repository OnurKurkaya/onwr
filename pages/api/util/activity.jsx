import fetch from 'isomorphic-unfetch';

export default async function Activity(req, res) {
    res.json(
        await (await fetch('https://linkcord.js.org/api/v3/user/774591026940739585')).json()
    );
};
