class SecretHandshake
  attr_reader :commands

  def initialize(foo)
    @commands = []
    convert_to_handshake(foo)
  end

  def convert_to_handshake(decimal)
    return unless decimal.is_a? Integer

    if decimal & 1 == 1
      @commands << 'wink'
    end
    
    if decimal & 2 == 2
      @commands << 'double blink'
    end

    if decimal & 4 == 4
      @commands << 'close your eyes'
    end

    if decimal & 8 == 8
      @commands << 'jump'
    end

    if decimal & 16 == 16
      @commands.reverse!
    end
  end
end