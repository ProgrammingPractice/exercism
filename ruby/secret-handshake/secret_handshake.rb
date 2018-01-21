class SecretHandshake
  attr_reader :commands

  def initialize(foo)
    @commands = []
    convert_to_handshake(foo)
  end

  def convert_to_handshake(decimal)
    if decimal & 1 == 1
      @commands << 'wink'
    end
    
    if decimal & 2 == 2
      @commands << 'double blink'
    end

    if decimal & 4 == 4
      @commands << 'close your eyes'
    elsif decimal & 8 == 8
      @commands << 'jump'
    end
  end
end