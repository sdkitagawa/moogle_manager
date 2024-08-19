<h1 align="center">
    モーグリマネージャ
    <br />
</h1>

<p align=center>
<img src="https://i.imgur.com/zhNQNG8.png" width="250px" alt="白いムーグルが左手にアイテムを持って飛び、手紙と右手にDKと友人たちの議題を持っています。 Moogleもマネージャーと書かれたIDを身に着けています。 彼は頬を赤らめ、アンテナの上に赤い球体のアンテナを持っています。" loading="lazy" />
</p>

<a href="#アプリケーション情報"><p align="center">アプリケーション情報</p></a>
<a href="#説明会"><p align="center">説明会</p></a>
<a href="#サーバに招待します"><p align="center">サーバに招待します</p></a>
<a href="#テクノロジ"><p align="center">テクノロジ</p></a>
<a href="#依存関係"><p align="center">依存関係</p></a>
<a href="#ボットコマンド"><p align="center">ボットコマンド</p></a>
<a href="#連絡先"><p align="center">連絡先</p></a>
<a href="#ライセンス"><p align="center">ライセンス</p></a>

<br /><br />

<p align="center">
  <a href="#" title="アプリケーションが動作しています"><img src="https://img.shields.io/badge/build-passing-brightgreen" alt="アプリケーションのビルドが終了していることを示す、半分の灰色（左側）と緑（右側）のイメージです"></a>
  <a href="https://github.com/sdkitagawa/moogle_manager?tab=GPL-3.0-1-ov-file" title="ライセンス"><img src="https://camo.githubusercontent.com/a40de0257320518fb90f63064c57e70bc026d492b258b4ea42ec58f1e5f2279c/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f72617468656e612f72617468656e612e737667" alt="半分の灰色（左側）と半分のオレンジ（右側）の画像で、プロジェクトがどのライセンス下にあるかを示します"></a>
  <a href="https://www.javascript.com/" title="JavaScript ホームページに移動します"><img src="https://img.shields.io/badge/Made_with-JavaScript-yellow?logo=javascript&logoColor=white" alt="このプロジェクトが JavaScript を使用して構築されたことを示す、半分のグレー（左側）と半分のオレンジ（右側）のイメージです"></a>
  <a href="https://nodejs.org" title="Node.js ホームページに移動します"><img src="https://img.shields.io/badge/Node.js-%3E=18-green?logo=node.js&logoColor=white" alt="このプロジェクトが Node.Js を使用して構築されたことを示す、半分のグレー（左側）と半分のオレンジ（右側）のイメージです"></a>
  <a href="https://www.mongodb.com/" title="MongoDB のホームページに移動します"><img src="https://img.shields.io/badge/MongoDB-green?logo=mongodb&logoColor=white" alt="このプロジェクトが MongoDB を使用して構築されたことを示す、半分のグレー (左側) と半分のオレンジ (右側) のイメージです"></a>
</p>

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

### 管理します
- `ban`: サーバからメンバーを禁止します。
- `echo`: ボットを介してメッセージを送信します。
- `kick`: サーバからメンバーをキックします。
- `timeout`: サーバのメンバをミュートします。
- `embed-creator`: カスタム エンベデッドを作成します。
- `field-embed`: フィールドと値を含むカスタム埋め込みを作成します。

### その他
> 次のコマンドは、**英語（北米）**および**ポルトガル語（ブラジル）の**多言語出力**をサポートします**.
- `commands`: すべての Moogle Manager コマンドを表示します
- `developer`: Moogle Manager Developer に関する情報を表示します。
- `ping`: Discord Client と Discord の Websocket ping の現在の ping を確認します。
- `server-info`: ギルド（サーバ）に関する情報を提供します。

### ユーティリティ
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
<br /><br />

# 連絡先
### **肉についてもっと知ることができます:**
- ⚡ [**LinkedIn**](https://linkedin.com/in/douglas-kitagawa/)
- 📫 [**E-mail**](mailto:douglaskitagawa@proton.me)
- 👨🏻‍💻 [**Github**](https://github.com/sdkitagawa)
- 📺 [**Youtube**](https://www.youtube.com/@dkitagawa)
- 📺 [**Twitch**](https://www.twitch.tv/kitbitdots)

# ライセンス
Copyright © Douglas Kitagawa's (dkitagawa's) Development - [GNU General Public License v3.0](../../LICENSE.bib)でライセンスが付与されました
