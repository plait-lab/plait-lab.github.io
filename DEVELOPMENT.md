# Development

Looking to contribute to the PLAIT Lab website? Start here to get your local environment set up!

## Setup

To run the lab site locally on a Mac, you _cannot_ use the system Ruby installation. Instead, follow these instructions:

1. Install Ruby 3 using [Homebrew](https://brew.sh/) or another package manager or installation tool of your choice — [the Ruby site](https://www.ruby-lang.org/en/documentation/installation/) has several options!

```sh
brew install ruby
```

2. Add the following entry to your `PATH`:

```sh
/usr/local/opt/ruby/bin
```

If you installed Ruby 3 via Homebrew, you should see an instruction in the standard output in your terminal with a one-liner for updating your `PATH` based on your particular shell of choice. For example, if using `zsh`, this will look something like:

```sh
echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.zshrc
```

3. Verify your Ruby installation by running the following command:

```sh
ruby -v
```

This should print a version starting with `3.`.

4. Install Ruby dependencies by running the following command:

```sh
bundle install
```

You're now fully setup and reading to serve the site locally.

## Serving the Site Locally

To serve the build locally, run the following command:

```sh
bundle exec jekyll serve
```

This will spin up a local development server at `http://localhost:4000/`.