import fetch from 'isomorphic-unfetch';

export default async function Repos(req, res) {
    res.json(
        await (await fetch('https://api.github.com/users/ewingdev/repos', {
            headers: {
                'Authorization': 'token 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'
            } // get token: https://github.com/settings/tokens
        })).json()
    );
};