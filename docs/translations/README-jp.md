# Moogle マネージャ情報

<p align=center>
<img src="https://i.imgur.com/zhNQNG8.png" width="250px" alt="白いムーグルが左手にアイテムを持って飛び、手紙と右手にDKと友人たちの議題を持っています。 Moogleもマネージャーと書かれたIDを身に着けています。 彼は頬を赤らめ、アンテナの上に赤い球体のアンテナを持っています。" loading="lazy" />
</p>
<br />

<center>

[アプリケーション情報](#アプリケーション情報)<br />
[説明会](#説明会)<br />
[サーバに招待します](#サーバに招待します)<br />
[テクノロジ](#テクノロジ)<br />
[依存関係](#依存関係)<br />
[ボットコマンド](#ボットコマンド)<br />
<br /><br />

</center>

翻訳
---
<details>
<summary>次のサイトでも利用できます:</summary>

- [英語](./README.md)
- [スペイン語](./README-es.md)
- [ポルトガル語](./README-pt-br.md)
- [日本語](./README-jp.md)
</details>
<br />

## アプリケーション情報
- **名前**: [`Moogle Manager`**#1172**](https://discord.com/users/1221986587399815198/)
- **推奨される役割の色**: `#F185B5`
<br /><br />

## 説明会
**Moogle Manager**は主に[dkitagawa](https://discord.com/users/737103505663328356/)が所有するDiscordサーバーである**The Legend of DK and Friends**のために開発されたボットです。

**Moogle Manager** には、ユーティリティやその他のコマンドを使用してサーバを管理するための高度なモデレートツールが付属しています！
<br /><br />

## サーバに招待します
Moogle Manager をサーバに招待します！

**招待リンク**: https://discord.com/oauth2/authorize?client_id=1270239316651675690
<br /><br />

# テクノロジ
- [**Vanilla JavaScript**](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - 一般的なバックエンド開発用です;
- [**Node.js**]() - サーバ、Webアプリケーション、コマンドラインツール、スクリプトを開発するための、プラットフォームをまたぐ無料のJavaScriptランタイム環境です;
- [**Discord.JS**](https://discord.js.org/) - Discord API と対話できる Node.js モジュールです;
- [**MongoDB**](https://www.mongodb.com/company/what-is-mongodb) - データベースサーバの場合です;
<br /><br />

# 依存関係
- [**Nodemon**](https://nodemon.io/) - ソースの変更を監視し、アプリケーションを自動的に再起動するためのNode.js用ユーティリティツールです;
- [**dotenv**](https://www.npmjs.com/package/dotenv) - `.env` ファイルから `process.env` に環境変数をロードするモジュールです;
- [**pretty-ms**](https://www.npmjs.com/package/pretty-ms) - ミリ秒、秒、分、時間を人間が読める文字列に変換するライブラリです;
- [**@IamTraction/Google Translate**](https://www.npmjs.com/package/@iamtraction/google-translate) - Google翻訳APIを無料で使用するNode.jsライブラリです;
- [**mongoose**](https://mongoosejs.com/) - MongoDB は、アプリケーションデータをモデル化するための、シンプルでスキーマベースのソリューションです;
- [**MathJS**](https://mathjs.org/) - JavaScript および Node.js 用のシンボリック計算ライブラリをサポートする数学的柔軟な式パーサーです。
<br /><br />

# ボットコマンド

### Administration
- `ban`: サーバからメンバーを禁止します。
- `echo`: ボットを介してメッセージを送信します。
- `kick`: サーバからメンバーをキックします。
- `timeout`: サーバのメンバをミュートします。
- `embed-creator`: カスタム エンベデッドを作成します。
- `field-embed`: フィールドと値を含むカスタム埋め込みを作成します。

### Miscellaneous
> 次のコマンドは、**英語（北米）**および**ポルトガル語（ブラジル）の**多言語出力**をサポートします**.
- `commands`: すべての Moogle Manager コマンドを表示します
- `developer`: Moogle Manager Developer に関する情報を表示します。
- `ping`: Discord Client と Discord の Websocket ping の現在の ping を確認します。
- `server-info`: ギルド（サーバ）に関する情報を提供します。

### Utilities
> これらのコマンドは、**英語（北米）**および**ポルトガル語（ブラジル）**の**多言語出力**をサポートします。
- `calculator`: 電卓のインターフェイスを起動します。
- `furigana`: フリガナが何であるかを説明します。
- `hiragana-table`: ひらがなテーブル全体を表示します。
- `hiragana`: ひらがなのお話です。
- `kanji`: 漢字が何なのか説明します。
- `katakana-table`: カタカナテーブル全体を表示します。
- `katakana`: カタカナの物語をお伝えします。
- `okurigana`: オクリガナが何であるかを説明します。
- `translate`: Google Translate API を使用してテキストを変換します。