アップロード用パッケージ

このフォルダ全体をWeb公開先へアップロードしてください。

入口:
index.html

構成:
pc      PC用
mobile  スマホ用
tablet  タブレット用

index.html で端末を判定し、以下へ自動移動します。
スマホ     -> mobile/00_basic_input.html
タブレット -> tablet/00_basic_input.html
PC         -> pc/00_basic_input.html

判定が違う場合に備えて、index.html には手動選択ボタンもあります。

注意:
Googleドライブの共有リンクはWebアプリ公開ではなくファイルプレビューになりやすいため、
Netlify、Cloudflare Pages、GitHub Pages、Azure Static Web Apps などの静的Web公開先に置くのがおすすめです。
