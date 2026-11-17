"""Aperçu local du site, avec les mêmes adresses que GitHub Pages.

    python outils/serveur-local.py            (port 8137)
    python outils/serveur-local.py 8000

- /a-propos sert a-propos.html, /en/ sert en/index.html (adresses sans .html) ;
- une adresse inexistante sert 404.html, avec le code 404.
"""
import http.server
import os
import sys

RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


class Gestionnaire(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=RACINE, **kwargs)

    def send_head(self):
        chemin = self.translate_path(self.path)
        if not os.path.exists(chemin) and os.path.isfile(chemin + ".html"):
            self.path = self.path.split("?", 1)[0].split("#", 1)[0] + ".html"
        elif not os.path.exists(chemin):
            self.send_response(404)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.end_headers()
            with open(os.path.join(RACINE, "404.html"), "rb") as f:
                self.wfile.write(f.read())
            return None
        return super().send_head()


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8137
    print(f"TEDxPenfeld en local : http://127.0.0.1:{port}/")
    http.server.ThreadingHTTPServer(("127.0.0.1", port), Gestionnaire).serve_forever()
