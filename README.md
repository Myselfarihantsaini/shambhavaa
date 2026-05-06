# Shambhavaa

Static storefront for Shambhavaa, built with plain HTML, CSS, JavaScript, and local product images.

## Deploying on GitHub Pages

1. Create a new GitHub repository named `shambhavaa`.
2. Push this folder to the repository's `main` branch.
3. In GitHub, open **Settings -> Pages**.
4. Set **Source** to **Deploy from a branch**.
5. Set **Branch** to `main` and folder to `/(root)`.
6. Set the custom domain to `shambhavaa.com`.
7. Enable **Enforce HTTPS** after DNS finishes propagating.

The `CNAME` file is already set to `shambhavaa.com`.

## DNS Records

For `shambhavaa.com`, add GitHub Pages apex records at your DNS provider:

```text
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
AAAA  @     2606:50c0:8000::153
AAAA  @     2606:50c0:8001::153
AAAA  @     2606:50c0:8002::153
AAAA  @     2606:50c0:8003::153
```

For `www.shambhavaa.com`, add:

```text
CNAME www   <your-github-username>.github.io
```

Replace `<your-github-username>` with the GitHub account or organization that owns the repository.
