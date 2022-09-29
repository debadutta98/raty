describe('#click', function () {
  beforeEach(function () {
    this.el = Helper.create('#el');
  });

  it('is called on star click', function () {
    // given
    var raty = new Raty(document.querySelector('#el'), {
      click: function () {
        this.called = true;
      },
    }).init();

    var star = Helper.last(raty.element.querySelectorAll('img'));

    // when
    Helper.trigger(star, 'click');

    // then
    expect(raty.element.called).toEqual(true);
  });

  it('has "this" as context', function () {
    // given
    var raty = new Raty(document.querySelector('#el'), {
      click: function () {
        this.result = this;
      },
    }).init();

    var star = Helper.last(raty.element.querySelectorAll('img'));

    // when
    Helper.trigger(star, 'click');

    // then
    expect(raty.element.result).toBe(document.querySelector('#el'));
  });

  it('receives the score as argument', function () {
    // given
    var raty = new Raty(document.querySelector('#el'), {
      click: function (score) {
        this.result = score;
      },
    }).init();

    var star = Helper.last(raty.element.querySelectorAll('img'));

    // when
    Helper.trigger(star, 'click');

    expect(raty.element.result).toEqual(5);
  });

  context('with return as undefined', function () {
    it('executes click behavior', function () {
      // given
      var raty = new Raty(document.querySelector('#el'), {
        click: function () {},
      }).init();

      var star = Helper.last(raty.element.querySelectorAll('img'));

      // when
      Helper.trigger(star, 'click');

      // then
      expect(raty.element.querySelector('input').value).toEqual('5');
    });

    it('turns on the stars', function () {
      // given
      var raty = new Raty(document.querySelector('#el'), {
        click: function () {},
      }).init();

      var stars = raty.element.querySelectorAll('img');

      // when
      Helper.trigger(stars[0], 'click');

      // then
      expect(Helper.extension(stars[0].src)).toEqual('star-on.png');
      expect(Helper.extension(stars[1].src)).toEqual('star-off.png');
      expect(Helper.extension(stars[2].src)).toEqual('star-off.png');
      expect(Helper.extension(stars[3].src)).toEqual('star-off.png');
      expect(Helper.extension(stars[4].src)).toEqual('star-off.png');
    });
  });

  context('with return as true', function () {
    it('applies the score', function () {
      // given
      var raty = new Raty(document.querySelector('#el'), {
        click: function () {
          return true;
        },
      }).init();

      var star = Helper.last(raty.element.querySelectorAll('img'));

      // when
      Helper.trigger(star, 'click');

      // then
      expect(raty.element.querySelector('input').value).toEqual('5');
    });

    it('turns on the stars', function () {
      // given
      var raty = new Raty(document.querySelector('#el'), {
        click: function () {
          return true;
        },
      }).init();

      var stars = raty.element.querySelectorAll('img');

      // when
      Helper.trigger(stars[0], 'click');

      // then
      expect(Helper.extension(stars[0].src)).toEqual('star-on.png');
      expect(Helper.extension(stars[1].src)).toEqual('star-off.png');
      expect(Helper.extension(stars[2].src)).toEqual('star-off.png');
      expect(Helper.extension(stars[3].src)).toEqual('star-off.png');
      expect(Helper.extension(stars[4].src)).toEqual('star-off.png');
    });
  });

  context('with return as false', function () {
    it('does not applies the score', function () {
      // given
      var raty = new Raty(document.querySelector('#el'), {
        click: function () {
          return false;
        },
      }).init();

      var star = raty.element.querySelector('img');

      // when
      Helper.trigger(star, 'click');

      // then
      expect(raty.element.querySelector('input').value).toEqual('');
    });

    it('does not turns on the stars', function () {
      // given
      var raty = new Raty(document.querySelector('#el'), {
        click: function () {
          return false;
        },
      }).init();

      var stars = raty.element.querySelectorAll('img');

      // when
      Helper.trigger(stars[0], 'click');

      // then
      expect(Helper.extension(stars[0].src)).toEqual('star-off.png');
      expect(Helper.extension(stars[1].src)).toEqual('star-off.png');
      expect(Helper.extension(stars[2].src)).toEqual('star-off.png');
      expect(Helper.extension(stars[3].src)).toEqual('star-off.png');
      expect(Helper.extension(stars[4].src)).toEqual('star-off.png');
    });
  });

  context('with :cancel', function () {
    it('executes the callback', function () {
      // given
      var raty = new Raty(document.querySelector('#el'), {
        cancelButton: true,
        click: function () {
          this.called = true;
        },
      }).init();

      var cancel = raty.element.querySelector('.raty-cancel');

      // when
      Helper.trigger(cancel, 'click');

      expect(raty.element.called).toEqual(true);
    });
  });

  context('on click without mouseover', function () {
    it('changes the stars to on', function () {
      // given
      var raty = new Raty(document.querySelector('#el')).init();
      var stars = raty.element.querySelectorAll('img');

      // when
      Helper.trigger(Helper.last(stars), 'click');

      // then
      expect(Helper.extension(stars[0].src)).toEqual('star-on.png');
      expect(Helper.extension(stars[1].src)).toEqual('star-on.png');
      expect(Helper.extension(stars[2].src)).toEqual('star-on.png');
      expect(Helper.extension(stars[3].src)).toEqual('star-on.png');
      expect(Helper.extension(stars[4].src)).toEqual('star-on.png');
    });
  });
});
