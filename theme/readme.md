# Gatsby Theme Waves

Add a section with a sticky column that changes as you scroll:

<div align="center">
<a href="https://gatsby-theme-waves.netlify.com/hello-world">
<img alt="gatsby waves demo" src="https://user-images.githubusercontent.com/1911623/61620586-6bb7cb80-ac71-11e9-9a78-ae8b95d164a9.gif" />
</a>
<div><a href="https://code-surfer.netlify.com/sample/">See the live demo</a></div>
</div>

Use it from MDX combining code and markdown:

````md
import { WaveSection } from "gatsby-theme-waves"

<WaveSection>

```py
# some code
```

# Some markdown

```py
# more code
```

More markdown

> and more

```py
# and more
```

- ok
- that's enough

</WaveSection>
````

## Installation

You need a Gatsby site with MDX. For example, this is how you add gatsby-theme-waves to a site that uses [gatsby-theme-blog](https://www.npmjs.com/package/gatsby-theme-blog):

1.  Install the theme (and `deepmerge` for merging the theme styles)

    ```sh
    npm install --save gatsby-theme-waves deepmerge
    ```

2.  Add the theme to your `gatsby-config.js` (at the end of the plugin list just in case)

    ```js
    module.exports = {
      plugins: [
        "gatsby-theme-blog",
        "gatsby-theme-waves", // <-- add this
      ],
    }
    ```

3.  Merge the styles: create or edit `src/gatsby-plugin-theme-ui/index.js`

    ```js
    import wavesTheme from "gatsby-theme-waves/src/gatsby-plugin-theme-ui/index"
    import blogTheme from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/index"
    import merge from "deepmerge"

    export default merge(blogTheme, wavesTheme)
    ```

4)  Import `WaveSection` and use it in any MDX file

    ````md
    import { WaveSection } from "gatsby-theme-waves"

    <WaveSection>

    ```py
    # some code
    ```

    # Some markdown

    ```py
    # more code
    ```

    More markdown

    > and more

    ```py
    # and more
    ```

    - ok
    - that's enough

    </WaveSection>
    ````

### Code Blocks

By default the lines that changed between two consecutive code blocks will be highlighted. You can change it to highlihgt the line (and columns) you want:

````md
```js 1:3,6
// highlihgts line 1,2,3 and 6
```

```js 5[1,3:6],8
// highlihgts:
// columns 1,3,4,5 and 6 from line 5
// and line 8
```
````

## Coming Soon

- Mobile support
- Import code from files
- Better custom code syntax highligthing using theme-ui
- More docs
