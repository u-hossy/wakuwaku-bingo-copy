# ビンゴシステム2024年以降版（Firebase RealtimeDatabaseを使用したVer）

- 📖 [Remix docs](https://remix.run/docs)
- 📖 [Remix Cloudflare docs](https://remix.run/guides/vite#cloudflare)

## 環境構築

> pnpmがある前提で書きますが、最悪`pnpm`を`npm`と読み替えて実行しても動くはず。だけどよほどの理由がない限りは`pnpm`を導入してほしいな～

1. まずはこのレポジトリを以下のコマンドでクローンする

```sh
git clone 【GitレポジトリのURL】
```

1. 次に依存関係をインストールする

```sh
pnpm install
```

1. `.env.example`ファイルをコピーして、コピーしたファイルを`.env`ファイルに名前を変える
   これをUnix系のコマンドでやるなら以下のコマンド。別にGUI環境（VScodeのエクスプローラーなど）でやってもよい。

```sh
cp .env.example .env
```

1. Firebaseでプロジェクトを作成し、RealtimeDatabaseをプロジェクトに追加する
   これはFirebaseのサイト上で行うこと推奨。

1. Firebaseのプロジェクトの設定から「ウェブAPIキー」をコピーする

1. 先ほど作成した`.env`ファイルの`VITE_FIREBASE_API_KEY=`の右辺の`""`の中の文字列を消し、そこに貼り付ける。
   今回コピーしたウェブAPIキーが`abcdefg123456`なら`VITE_FIREBASE_API_KEY="abcdefg123456"`となるようにする。

1. 最後に以下のコマンドを実行すればローカル上の空いているポートで開発環境のサーバーが立ち上がります。

```sh
pnpm run dev
```

> これから下はRemix + Cloudflare が自動的に生成したものに日本語訳的なのをつけました。



## Development

Run the dev server（開発環境のサーバーをローカルで立ち上げるには以下のコマンドを実行しよう）:

```sh
pnpm run dev
```

To run Wrangler:

```sh
pnpm run build
pnpm run start
```

## Typegen

Generate types for your Cloudflare bindings in `wrangler.toml`:

```sh
pnpm run typegen
```

You will need to rerun typegen whenever you make changes to `wrangler.toml`.

## Deployment

First, build your app for production（ビルドする(公開用のファイルをソースコードから作成すること)ときは以下のコマンドを実行しよう）:

```sh
pnpm run build
```

Then, deploy your app to Cloudflare Pages（その後、Cloudflare PagesにCLI(コマンドライン)からデプロイするなら以下のコマンドを実行しよう）:

```sh
pnpm run deploy
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.
