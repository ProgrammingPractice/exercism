class SecretHandshake
  def initialize(decimal)
    @decimal = decimal
  end

  def commands
    return [] unless @decimal.is_a?(Integer)

    [].tap do |array|
      if @decimal & 1 == 1
        array << 'wink'
      end
      
      if @decimal & 2 == 2
        array << 'double blink'
      end

      if @decimal & 4 == 4
        array << 'close your eyes'
      end

      if @decimal & 8 == 8
        array << 'jump'
      end

      if @decimal & 16 == 16
        array.reverse!
      end
    end
  end
end