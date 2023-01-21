# Storybook の addon を色々試すための砂場

砂場です。  
Storybook 何も分からないので修行します。

## メモ

- 動かすアプリケーションからは切り出されたパッケージであることも多いと思うので、それに合わせて monorepo 構成。
- Next.js に next-transpile-modules の機能が組み込まれていてよかった。
  - [Blog - Next.js 13.1](https://nextjs.org/blog/next-13-1)
- 雑に turbo を入れた。
  - turbo は pipeline がシンプルならそれなりにカジュアルに動かせてよい。リポジトリ内のあらゆるタスクの依存関係を turbo に教えこもうとすると複雑になっていきそうだが、まあ開発者が理解していて turbo に教えてスタンスの場合は特に面倒なことにはならなそう。
  - とはいえ monorepo の依存の辛さを解決するためのものなのでやはり任せなければいけない (知らんけど)
- pnpm も雑に入れた。
  - よく分からんが default の振る舞いで peer dependency を自動で入れてくれないみたいだったので .npmrc で auto-install-peers を指定した。
  - unmet peer などがシンプルに読みやすくてよい。
