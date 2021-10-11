%:
	@:

.PHONY: asdf-install-pre
asdf-install-pre:
	brew bundle
	
# Install the dependencies for both cloud functions/web folders.
.PHONY: install
install:
	@npm i

# Start the NextJS server.
.PHONY: dev
dev:
	@npm run dev

# Start the Firebase Emulator.
.PHONY: fb
fb:
	@npm run fb


# Start the Firebase Emulator.
.PHONY: fbInit
fbInit:
	@npm run fbInit