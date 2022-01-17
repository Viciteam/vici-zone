import React from 'react'

const CookiePolicy = () => {
  return (
    <div>
      <a href="https://www.iubenda.com/privacy-policy/46586081/cookie-policy" class="iubenda-white no-brand iubenda-noiframe iubenda-embed iubenda-noiframe iub-body-embed" title="Cookie Policy">
          Cookie Policy
      </a>
      <script type="text/javascript">
        {
          (function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document)
        }   
        </script>
    </div>
  )
}

export default CookiePolicy